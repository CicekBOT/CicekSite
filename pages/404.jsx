import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunumu kaybettin çoçuk adam?',
        'Galiba...Yolun sonuna geldik.',
        'Yol tıkanık başka bir yol denemelisin.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

