'use client';

import React from 'react';

export default function SnapshotStripSection() {
  return (
    <section className="snapshot-strip">
      <div className="container">
        <div className="snapshot-grid">
          <div className="snapshot-card">
            <i className="fa-solid fa-layer-group text-caramel"></i>
            <span className="val font-gumani font-bold">5.3 Acres</span>
            <span className="lbl font-figtree font-medium">Gated Township</span>
          </div>
          <div className="snapshot-card">
            <i className="fa-solid fa-hotel text-caramel"></i>
            <span className="val font-gumani font-bold">2 BHK & Duplex</span>
            <span className="lbl font-figtree font-medium">Smart Layouts</span>
          </div>
          <div className="snapshot-card">
            <i className="fa-solid fa-indian-rupee-sign text-caramel"></i>
            <span className="val font-gumani font-bold">₹55 Lakhs*</span>
            <span className="lbl font-figtree font-medium">Starting Price</span>
          </div>
          <div className="snapshot-card">
            <i className="fa-solid fa-up-down-left-right text-caramel"></i>
            <span className="val font-gumani font-bold">1,100 - 2,200</span>
            <span className="lbl font-figtree font-medium">Sq.Ft Carpet Area</span>
          </div>
          <div className="snapshot-card">
            <i className="fa-solid fa-map-location-dot text-caramel"></i>
            <span className="val font-gumani font-bold">1 Min</span>
            <span className="lbl font-figtree font-medium">To ORR Exit 5</span>
          </div>
          <div className="snapshot-card">
            <i className="fa-solid fa-trowel-bricks text-emerald"></i>
            <span className="val font-gumani font-bold text-emerald">90% Built</span>
            <span className="lbl font-figtree font-medium">Possession Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
