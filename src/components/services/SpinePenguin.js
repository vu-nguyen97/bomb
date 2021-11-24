export default class SpinePenguin {
  skeleton;
  state;

  loadAssets(canvas) {
    canvas.assetManager.AnimationState && canvas.assetManager.AnimationState();
    canvas.assetManager.loadTextureAtlas("Character.atlas");
    canvas.assetManager.loadJson("Character.json");
  }

  initialize(canvas) {
    // @ts-ignore
    const spine = window.spine;

    if (!spine) return;

    let assetManager = canvas.assetManager;
    let atlas = canvas.assetManager.require("Character.atlas");
    let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
    let skeletonJson = new spine.SkeletonJson(atlasLoader);
    let skeletonData = skeletonJson.readSkeletonData(
      assetManager.require("Character.json")
    );

    this.skeleton = new spine.Skeleton(skeletonData);
    let stateData = new spine.AnimationStateData(skeletonData);
    this.state = new spine.AnimationState(stateData);
    let dictPart = {};

    for (let i in skeletonData.skins) {
      let skin = skeletonData.skins[i];
      if (skin.name === "default") continue;
      let partName = skin.name.substring(0, skin.name.indexOf("/"));
      if (!(partName in dictPart)) dictPart[partName] = [];
      dictPart[partName].push(skin.name);
    }

    dictPart["Color"] = skeletonData.animations
      .filter((a) => a.name.startsWith("Color/"))
      .map((a) => a.name);
    let skinMix = Object.keys(dictPart).map(
      (k) => dictPart[k][Math.floor(Math.random() * dictPart[k].length)]
    );
    let className = skinMix[0].split("/")[1];
    let mixAndMatchSkin = new spine.Skin("className");

    for (let i in skinMix) {
      if (skinMix[i].startsWith("Color/"))
        this.state.setAnimation(10, skinMix[i], false);
      else mixAndMatchSkin.addSkin(skeletonData.findSkin(skinMix[i]));
    }

    this.skeleton.setSkin(mixAndMatchSkin);
    this.skeleton.setSlotsToSetupPose();
    this.state.setAnimation(0, className + "/idle", true);
  }

  update(canvas, delta) {
    this.state.update(delta);
    this.state.apply(this.skeleton);
    this.skeleton.updateWorldTransform();
  }

  render(canvas) {
    let renderer = canvas.renderer;

    // @ts-ignore
    renderer.resize(window.spine?.ResizeMode?.Expand);
    canvas.clear(0.2, 0.2, 0.2, 1);
    renderer.begin();
    renderer.drawSkeleton(this.skeleton, true);
    renderer.end();
  }
}
