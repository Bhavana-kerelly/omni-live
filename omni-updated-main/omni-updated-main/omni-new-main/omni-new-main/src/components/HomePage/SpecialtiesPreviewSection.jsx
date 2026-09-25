import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';

export default function SpecialtiesPreviewSection({ onExploreCinematic }) {
  return (
    <section className="coe-editorial-section" id="specialities">
      {/* Background Radial Glow */}
      <div className="coe-bg-radial-glow" aria-hidden="true" />

      <div className="coe-section-container">
        
        {/* TOP ROW GRID: Editorial Intro (Left) | 01 Heart Hero (Center) | Stack 02 & 03 (Right) */}
        <div className="coe-top-row-grid">
          
          {/* EDITORIAL LEFT COLUMN */}
          <div className="coe-editorial-col">
            <div className="coe-eyebrow-pill">
              <span className="eyebrow-dash-line" />
              <span>Centers of Excellence</span>
            </div>

            <h2 className="coe-main-heading">
              <span className="coe-blue-text-primary">Expertise</span> <br />
              <span className="coe-green-text-accent">Across Every</span> <br />
              <span className="coe-green-text-accent">Stage of Care</span>
            </h2>

            <p className="coe-supporting-text">
              Our specialists combine advanced technology, deep expertise and compassionate care to deliver the best outcomes for you and your loved ones.
            </p>

            <button 
              type="button" 
              className="coe-cta-outline-btn"
              onClick={onExploreCinematic}
            >
              <span>Explore All Specialties</span>
              <div className="arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
          </div>

          {/* CARD 01: HEART & VASCULAR */}
          <div 
            className="coe-card coe-light-card coe-heart-hero-card"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">01</span>
              </div>

              <div className="coe-card-text-block">
                <h3 className="coe-card-title-serif">Heart &amp; Vascular</h3>
                <p className="coe-card-copy-light">
                  Advanced cardiac care with innovation and expertise at every heartbeat.
                </p>
              </div>

              <div className="coe-card-bottom-cta">
                <span>Explore Specialty</span>
                <div className="arrow-circle-sm">
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>

            {/* Right-aligned Graphic Placement with Brand Blend */}
            <div className="coe-card-right-graphic coe-heart-graphic">
              <img 
                src={getAssetUrl('/images/specialties/heart-vascular.jpg?v=3')} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop';
                }}
                alt="Heart & Vascular Care" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

          {/* STACK COLUMN: CARD 02 & CARD 03 */}
          <div className="coe-stack-col">
            
            {/* CARD 02: BRAIN & NERVOUS SYSTEM */}
            <div 
              className="coe-card coe-light-card coe-stack-card"
              onClick={onExploreCinematic}
              role="button"
              tabIndex={0}
            >
              <div className="coe-card-left-content">
                <div className="coe-card-top-meta">
                  <span className="coe-num-badge">02</span>
                </div>

                <div className="coe-card-text-block">
                  <h3 className="coe-card-title-serif">Brain &amp; Nervous System</h3>
                  <p className="coe-card-copy-light">
                    Expert care for complex neurological conditions.
                  </p>
                </div>
              </div>

              <div className="coe-card-right-graphic stack-graphic-pos coe-brain-graphic">
                <img 
                  src={getAssetUrl('/images/specialties/brain-nervous.jpg?v=3')} 
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop';
                  }}
                  alt="Brain & Nervous System" 
                  className="coe-graphic-img-bright"
                />
                <div className="coe-graphic-blend-mask" />
              </div>
            </div>

            {/* CARD 03: BONES & MOVEMENT */}
            <div 
              className="coe-card coe-light-card coe-stack-card"
              onClick={onExploreCinematic}
              role="button"
              tabIndex={0}
            >
              <div className="coe-card-left-content">
                <div className="coe-card-top-meta">
                  <span className="coe-num-badge">03</span>
                </div>

                <div className="coe-card-text-block">
                  <h3 className="coe-card-title-serif">Bones &amp; Movement</h3>
                  <p className="coe-card-copy-light">
                    Restoring mobility through advanced ortho care.
                  </p>
                </div>
              </div>

              <div className="coe-card-right-graphic stack-graphic-pos coe-bones-graphic">
                <img 
                  src={getAssetUrl('/images/specialties/bones-movement.jpg?v=3')} 
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop';
                  }}
                  alt="Bones & Movement Care" 
                  className="coe-graphic-img-bright"
                />
                <div className="coe-graphic-blend-mask" />
              </div>
            </div>

          </div>

        </div>

        {/* MIDDLE ROW GRID: 3 SPECIALTIES (04 Digestive | 05 Respiratory | 06 Gynecology) */}
        <div className="coe-mid-row-grid-three">
          
          {/* CARD 04: DIGESTIVE HEALTH */}
          <div 
            className="coe-card coe-light-card coe-mid-card"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">04</span>
              </div>

              <h3 className="coe-card-title-serif">Digestive Health</h3>
              <p className="coe-card-copy-light">
                Expert care for digestive, liver &amp; pancreatic conditions.
              </p>

              <div className="coe-mid-cta">
                <span>Explore</span>
                <div className="arrow-circle-xs">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            <div className="coe-card-right-graphic mid-graphic-pos coe-digestive-graphic">
              <img 
                src={getAssetUrl('/images/specialties/digestive-health.jpg?v=3')} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=500&auto=format&fit=crop';
                }}
                alt="Digestive Health" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

          {/* CARD 05: RESPIRATORY CARE */}
          <div 
            className="coe-card coe-light-card coe-mid-card"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">05</span>
              </div>

              <h3 className="coe-card-title-serif">Respiratory Care</h3>
              <p className="coe-card-copy-light">
                Comprehensive care for breathing disorders &amp; sleep.
              </p>

              <div className="coe-mid-cta">
                <span>Explore</span>
                <div className="arrow-circle-xs">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            <div className="coe-card-right-graphic mid-graphic-pos coe-lungs-graphic">
              <img 
                src={getAssetUrl('/images/specialties/respiratory-care.jpg?v=3')} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=500&auto=format&fit=crop';
                }}
                alt="Respiratory Care" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

          {/* CARD 06: GYNECOLOGY & WOMEN'S HEALTH */}
          <div 
            className="coe-card coe-light-card coe-mid-card"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">06</span>
              </div>

              <h3 className="coe-card-title-serif">Gynecology &amp; Women’s Health</h3>
              <p className="coe-card-copy-light">
                Compassionate care for every stage of womanhood.
              </p>

              <div className="coe-mid-cta">
                <span>Explore Specialty</span>
                <div className="arrow-circle-xs">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            <div className="coe-card-right-graphic mid-graphic-pos coe-women-graphic">
              <img 
                src={getAssetUrl('/images/specialties/women-health-portrait.jpg?v=3')} 
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallbackTried) {
                    e.currentTarget.dataset.fallbackTried = 'true';
                    e.currentTarget.src = getAssetUrl('/images/specialties/women-health.jpg');
                  } else {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop';
                  }
                }}
                alt="Gynecology & Women's Health" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 2 SPECIALTY CARDS (07 Dermatology + 08 ENT Care) */}
        <div className="coe-bottom-two-grid">
          
          {/* CARD 07: DERMATOLOGY */}
          <div 
            className="coe-card coe-light-card coe-bottom-card-half"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">07</span>
              </div>

              <div className="coe-card-text-block">
                <h3 className="coe-card-title-serif">Dermatology</h3>
                <p className="coe-card-copy-light">
                  Medical, surgical and cosmetic solutions for healthy, radiant skin.
                </p>
              </div>

              <div className="coe-mid-cta">
                <span>Explore</span>
                <div className="arrow-circle-xs">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            <div className="coe-card-right-graphic mid-graphic-pos coe-dermatology-graphic">
              <img 
                src={getAssetUrl('/images/specialties/dermatology.jpg?v=3')} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1512290900673-7002fa872320?q=80&w=500&auto=format&fit=crop';
                }}
                alt="Dermatology Care" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

          {/* CARD 08: ENT CARE */}
          <div 
            className="coe-card coe-light-card coe-bottom-card-half"
            onClick={onExploreCinematic}
            role="button"
            tabIndex={0}
          >
            <div className="coe-card-left-content">
              <div className="coe-card-top-meta">
                <span className="coe-num-badge">08</span>
              </div>

              <div className="coe-card-text-block">
                <h3 className="coe-card-title-serif">ENT Care</h3>
                <p className="coe-card-copy-light">
                  Advanced treatment for ear, nose, throat &amp; hearing.
                </p>
              </div>

              <div className="coe-mid-cta">
                <span>Explore</span>
                <div className="arrow-circle-xs">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            <div className="coe-card-right-graphic mid-graphic-pos coe-ent-graphic">
              <img 
                src={getAssetUrl('/images/specialties/ent-care.jpg?v=3')} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500&auto=format&fit=crop';
                }}
                alt="ENT Care" 
                className="coe-graphic-img-bright"
              />
              <div className="coe-graphic-blend-mask" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
