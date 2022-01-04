import React from "react";

function VideoTrailer() {
  return (
    <section id="videoTrailer" className="VideoTrailer page-section">
      <div
        className="container pt-2 pb-5 reveal-from-bottom"
        data-reveal-delay="300"
      >
        <div className="custom-max-width mx-auto mb-xxl-5">
          <div className="VideoTrailer-videoWrapper">
            <iframe
              className="VideoTrailer-videoWrapper-video h-100 w-100"
              src="https://www.youtube.com/embed/rIYxCgMWNZQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video trailer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoTrailer;
