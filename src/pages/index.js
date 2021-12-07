const Home = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{title}</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: "NextJS starter",
    },
  };
}

export default Home;
