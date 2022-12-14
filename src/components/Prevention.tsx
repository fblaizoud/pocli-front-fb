import React, { useEffect } from 'react';

import Banner from './Banner';
import ComeBackHome from './ComeBackHome';
import Icon from './Icon';

const Prevention = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="preventionBanner">
        <h1>Prévention - Action sociale</h1>
        <Icon name="hand-holding-heart" color="#fff" />
      </div>
      <Banner
        nameBannerActivity="activity social"
        title="Prévention - Action sociale"
        nameIcon="hand-holding-heart"
        memberFilter={false}
        bannerAbout={false}
        bannerEvent={false}
        bannerMember={false}
      />
      <div className="preventionContainer">
        <div className="preventionContainer__header">
          <p>Un lieu pour préserver son capital santé et lutter contre l’isolement.</p>
          <p>
            Nos «visites de convivialité» et nos «rencontres de L.I.S.E.» maintiennent le
            lien avec les plus isolés.
          </p>
        </div>
        <div className="preventionContainer__visit">
          <h1>Les Visites de Convivialité</h1>
          <p>En partenariat avec le CCAS de St Quentin de Baron.</p>
          <div className="preventionContainer__visit__description">
            <div className="preventionContainer__visit__description__firstPoint">
              <Icon name="arrow-right" height="40px" color="#b02418" opacity={0.6} />
              <p className="preventionContainer__visit__description__firstPoint__text">
                Pour garder le lien avec les personnes isolées de la commune.
              </p>
            </div>
            <div className="preventionContainer__visit__description__secondPoint">
              <Icon name="arrow-right" height="40px" color="#b02418" opacity={0.6} />
              <p className="preventionContainer__visit__description__secondPoint__text">
                Rencontres régulières pour passer un moment convivial et garder un lien
                social.
              </p>
            </div>
          </div>
        </div>
        <div className="preventionContainer__meeting">
          <h1>Les Rencontres de L.I.S.E.</h1>
          <p>
            En partenariat avec les Accueil de Loisirs Sans Hébergement du territoire.
          </p>
          <div className="preventionContainer__meeting__description">
            <div className="preventionContainer__meeting__description__firstPoint">
              <Icon name="arrow-right" height="40px" color="#b02418" opacity={0.6} />
              <p className="preventionContainer__meeting__description__firstPoint__text">
                Pour lutter contre l’isolement des Séniors avec les enfants.
              </p>
            </div>
            <div className="preventionContainer__meeting__description__secondPoint">
              <Icon name="arrow-right" height="40px" color="#b02418" opacity={0.6} />
              <p className="preventionContainer__meeting__description__secondPoint__text">
                Temps de rencontres entre les séniors isolés du territoire et les enfants
                des accueils de loisirs de Quentin de Baron et Grézillac.
              </p>
            </div>
          </div>
        </div>
        <div className="preventionContainer__pictures">
          <img src="/assets/prevention1.png" alt="Prevention1" />
          <img src="/assets/prevention2.png" alt="Prevention2" />
        </div>
        <div className="preventionContainer__comeBackHome">
          <ComeBackHome />
        </div>
      </div>
    </div>
  );
};

export default Prevention;
