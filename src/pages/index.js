const Home = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "NextJS starter",
    },
  };
}

export default Home;
