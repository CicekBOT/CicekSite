import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Galiba 500 Kodlu Bir Hatamız Var!"} />
}

export default UnkownPage;
