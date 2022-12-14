import React, { useEffect, useState } from 'react';

import Banner from './Banner';
import ComeBackHome from './ComeBackHome';
import Icon from './Icon';

const PoliticConf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [politicListContact, setPoliticListContact] = useState(false);
  const [politicListRegister, setPoliticListRegister] = useState(false);
  const [politicListLetters, setPoliticListLetters] = useState(false);
  const [politicListCompiler, setPoliticListCompiler] = useState(false);

  const handleClickContact = () => {
    setPoliticListContact(!politicListContact);
  };
  const handleClickRegister = () => {
    setPoliticListRegister(!politicListRegister);
  };
  const handleClickLetters = () => {
    setPoliticListLetters(!politicListLetters);
  };
  const handleClickCompiler = () => {
    setPoliticListCompiler(!politicListCompiler);
  };

  return (
    <div className="">
      <Banner
        nameBannerActivity=""
        title="Politique de Confidentialité"
        nameIcon=""
        memberFilter={false}
        bannerAbout={false}
        bannerEvent={false}
        bannerMember={false}
      />
      <div className="politicContainer">
        <div className="politicContainer__politicSectionContainer">
          <div className="politicContainer__politicSectionContainer__politicPreambulContainer">
            <h1>Politique de confidentialité</h1>
            <p>
              Cette déclaration de confidentialité s’applique aux citoyens et aux
              résidents permanents légaux de l’Espace économique européen.
            </p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicDroitContainer">
            <p>
              Dans cette déclaration de confidentialité, nous expliquons ce que nous
              faisons avec les données que nous obtenons à votre sujet via
              https://www.pocli.fr. Nous vous recommandons de lire attentivement cette
              déclaration. Lors de notre traitement, nous nous conformons aux exigences de
              la législation sur la confidentialité. Cela signifie, entre autres, que :
            </p>
            <div className="politicContainer__politicSectionContainer__politicDroitContainer__politicDroitListContainer">
              <div className="politicContainer__politicSectionContainer__politicDroitContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  nous indiquons clairement dans quelles finalités nous traitons les
                  données personnelles. Nous faisons cela au moyen de cette déclaration de
                  confidentialité ;
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicDroitContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  nous visons à limiter notre recueil de données personnelles uniquement
                  aux données personnelles nécessaires à des finalités légitimes;
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicDroitContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  nous demandons d’abord votre consentement explicite pour traiter vos
                  données personnelles dans les cas nécessitant votre consentement;
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicDroitContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  nous prenons des mesures de sécurité appropriées afin de protéger vos
                  données personnelles, et nous en demandons autant des parties traitant;
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicDroitContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  nous respectons votre droit de consulter, corriger ou supprimer vos
                  données personnelles si vous en formulez la demande.
                </p>
              </div>
            </div>
            <p>
              Si vous avez des questions ou souhaitez savoir exactement quelles données
              nous conservons, veuillez nous contacter.
            </p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicTimeConservContainer">
            <h1>1. Finalité, données et durée de conservation</h1>
            <p>
              Nous pouvons collecter ou recevoir des informations personnelles pour un
              certain nombre de raisons liées à nos activités commerciales, notamment les
              suivantes : (cliquez pour déplier){' '}
            </p>
            <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer">
              <ul>
                <li
                  className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListRotateArrow"
                  aria-hidden
                  onKeyDown={handleClickContact}
                  onClick={() => {
                    handleClickContact();
                  }}>
                  <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListAlign">
                    <h2>
                      1.1 Contact – Par téléphone, courrier, e-mail et/ou formulaires web
                    </h2>
                    <div
                      style={
                        politicListContact
                          ? { transform: 'rotate(180deg)', transition: 'all 300ms ease' }
                          : {}
                      }>
                      <Icon
                        name="arrow-list"
                        width="20px"
                        height="20px"
                        color="#3d79af"
                      />
                    </div>
                  </div>
                  {politicListContact && (
                    <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer">
                      <h3>Dans cette finalité, nous utilisons les données suivantes :</h3>
                      <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer__fullList">
                        <ul>
                          <li>Nom, adresse et ville</li>
                          <li>Adresse e-mail</li>
                          <li>Adresse IP</li>
                          <li>Numéro de téléphone</li>
                        </ul>
                      </div>
                      <h3>Durée de conservation</h3>
                      <p>Nous conservons ces données jusqu’à la fin du service.</p>
                    </div>
                  )}
                </li>
                <li
                  className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListRotateArrow"
                  aria-hidden
                  onKeyDown={handleClickRegister}
                  onClick={() => {
                    handleClickRegister();
                  }}>
                  <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListAlign">
                    <h2>1.2 Enregistrement d’un compte</h2>
                    <div
                      style={
                        politicListRegister
                          ? {
                              transform: 'rotate(180deg)',
                              transition: 'all 300ms ease',
                            }
                          : {}
                      }>
                      <Icon
                        name="arrow-list"
                        width="20px"
                        height="20px"
                        color="#3d79af"
                      />
                    </div>
                  </div>
                  {politicListRegister && (
                    <div
                      className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer"
                      // style={
                      //   politicListRegister
                      //     ? { display: 'block', transition: 'all 1s ease-in-out' }
                      //     : { display: 'hidden' }
                      // }
                    >
                      <h3>Dans cette finalité, nous utilisons les données suivantes :</h3>
                      <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer__fullList">
                        <ul>
                          <li>Nom, adresse et ville</li>
                          <li>Adresse e-mail</li>
                          <li>
                            Nom d’utilisateur, mots de passe et autres données spécifiques
                            au compte
                          </li>
                          <li>Adresse IP</li>
                          <li>Numéro de téléphone</li>
                        </ul>
                      </div>
                      <h3>Durée de conservation</h3>
                      <p>Nous conservons ces données jusqu’à la fin du service.</p>
                    </div>
                  )}
                </li>
                <li
                  className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListRotateArrow"
                  aria-hidden
                  onKeyDown={handleClickLetters}
                  onClick={() => {
                    handleClickLetters();
                  }}>
                  <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListAlign">
                    <h2>1.3 Infolettres</h2>
                    <div
                      style={
                        politicListLetters
                          ? {
                              transform: 'rotate(180deg)',
                              transition: 'all 300ms ease',
                            }
                          : {}
                      }>
                      <Icon
                        name="arrow-list"
                        width="20px"
                        height="20px"
                        color="#3d79af"
                      />
                    </div>
                  </div>
                  {politicListLetters && (
                    <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer">
                      <h3>Dans cette finalité, nous utilisons les données suivantes :</h3>
                      <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer__fullList">
                        <ul>
                          <li>Nom, adresse et ville</li>
                          <li>Adresse e-mail</li>
                          <li>Adresse IP</li>
                        </ul>
                      </div>
                      <h3>Durée de conservation</h3>
                      <p>Nous conservons ces données jusqu’à la fin du service.</p>
                    </div>
                  )}
                </li>
                <li
                  className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListRotateArrow"
                  aria-hidden
                  onKeyDown={handleClickCompiler}
                  onClick={() => {
                    handleClickCompiler();
                  }}>
                  <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__politicTimeListAlign">
                    <h2>
                      1.4 Compiler et analyser des statistiques pour l’amélioration du
                      site web.
                    </h2>
                    <div
                      style={
                        politicListCompiler
                          ? { transform: 'rotate(180deg)', transition: 'all 300ms ease' }
                          : {}
                      }>
                      <Icon
                        name="arrow-list"
                        width="20px"
                        height="20px"
                        color="#3d79af"
                      />
                    </div>
                  </div>
                  {politicListCompiler && (
                    <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer">
                      <h3>Dans cette finalité, nous utilisons les données suivantes :</h3>
                      <div className="politicContainer__politicSectionContainer__politicTimeConservContainer__politicTimeListContainer__fullListContainer__fullList">
                        <ul>
                          <li>Adresse IP</li>
                        </ul>
                      </div>
                      <h3>Durée de conservation</h3>
                      <p>Nous conservons ces données jusqu’à la fin du service.</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="politicContainer__politicSectionContainer__politicCookieContainer">
            <h1>2. Cookies</h1>
            <p>
              Notre site web utilise des cookies. Pour plus d’informations sur les
              cookies, veuillez vous référer à notre Politique de cookies.{' '}
            </p>
            <p>Nous avons conclu un accord de traitement des données avec Google.</p>
            <p>Google ne peut utiliser les données pour aucun autre service Google.</p>
            <p>L’inclusion d’adresses IP complètes est bloquée par nous.</p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicSecurityContainer">
            <h1>3. Sécurité</h1>
            <p>
              Nous nous engageons à la sécurité des données personnelles. Nous prenons les
              mesures de sécurité appropriées pour limiter les abus et l’accès non
              autorisé aux données personnelles. Cela garantit que seules les personnes
              nécessaires ont accès à vos données, que l’accès aux données est protégé et
              que nos mesures de sécurité sont régulièrement revues.
            </p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicModifContainer">
            <h1>4. Modifications apportées à cette déclaration de confidentialité</h1>
            <p>
              Nous nous réservons le droit de modifier la présente déclaration de
              confidentialité. Il est recommandé de consulter régulièrement cette
              déclaration de confidentialité afin de prendre connaissance de toute
              modification éventuelle. De plus, nous vous informerons activement dans la
              mesure du possible.
            </p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicAccessContainer">
            <h1>5. Accéder à vos données et les modifier</h1>
            <p>
              Si vous avez des questions ou souhaitez savoir quelles sont les données
              personnelles que nous avons à votre sujet, veuillez nous contacter. Vous
              pouvez nous contacter en utilisant les informations ci-dessous. Vous avez
              les droits suivants:
            </p>
            <div className="politicContainer__politicSectionContainer__politicAccessContainer__politicAccessBloc__Bloc">
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Vous avez le droit de savoir pourquoi vos données personnelles sont
                  nécessaires, ce qui leur arrivera et combien de temps elles seront
                  conservées.
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Droit d’accès : vous avez le droit d’accéder à vos données personnelles
                  que nous connaissons.
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Droit de rectification : vous avez le droit à tout moment de compléter,
                  corriger, faire supprimer ou bloquer vos données personnelles.
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Si vous nous donnez votre consentement pour le traitement de vos
                  données, vous avez le droit de révoquer ce consentement et de faire
                  supprimer vos données personnelles.
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Droit de transférer vos données : vous avez le droit de demander toutes
                  vos données personnelles au responsable du traitement et de les
                  transférer.
                </p>
              </div>
              <div className="politicContainer__politicSectionContainer__politicAccessContainer__Bloc">
                <Icon name="arrow-right" width="50px" height="40px" color="#AF3D3D" />
                <p>
                  Droit d’opposition : vous pouvez vous opposer au traitement de vos
                  données. Nous obtempérerons, à moins que certaines raisons ne le
                  justifient.{' '}
                </p>
              </div>
            </div>
            <p>
              Assurez-vous de toujours indiquer clairement qui vous êtes, afin que nous
              puissions être certains de ne pas modifier ni supprimer les données de la
              mauvaise personne.
            </p>
          </div>
          <div className="politicContainer__politicSectionContainer__politicContactContainer">
            <h1>10. Coordonnées</h1>
            <p>pocli.asso@gmail.com</p>
            <p>07 64 15 27 11</p>
            <p>Lundi, mardi, jeudi, vendredi - de 9h à 12h30 et de 14h à 16h30</p>
            <p>4 Ribeyreau, 33420 Espiet</p>
          </div>
        </div>
        <div className="politicContainer__comeBackHome">
          <ComeBackHome />
        </div>
      </div>
    </div>
  );
};

export default PoliticConf;
