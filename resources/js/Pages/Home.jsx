import Layout from "../Layouts/Layout"

function Home()
{
    return <>
        <h1 className="title">Music Label Manager</h1>
    </>
}

Home.layout = page => <Layout children={page}/>

export default Home;