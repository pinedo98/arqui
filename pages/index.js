import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <p>Arquitectura de computadoras</p>

    <div className="sketchfab-embed-wrapper">
      <iframe width="1080" height="920"
              src="https://sketchfab.com/models/82f78bbaf2d34f01af854a52151dbf49/embed?autospin=0.2&amp;autostart=1"
              frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
              webkitallowfullscreen="true"></iframe>

      <p>
        <a
          href="https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
          target="_blank" >Dream Computer Setup</a>
        by <a href="https://sketchfab.com/SpanishPotato?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
              target="_blank" >Daniel Cardona</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank"
              >Sketchfab</a>
      </p>
    </div>
  </Layout>
);

export default Index
