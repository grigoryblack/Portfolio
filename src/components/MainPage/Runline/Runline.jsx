// Runline.js
import './_runline.scss';

const wordsArray = [
    'React.js', 'jsx', 'JS', 'SCSS', 'Vite', 'Electron', 'Git', 'Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'SQL'
];

const Runline = () => {
    return (
        <div className="wrap">
            <div className="items-wrap">
                <div className="items marquee">
                    {wordsArray.map((word, index) => (
                        <div key={index} className={`item ${index % 2 === 0 ? 'black' : 'green'}`}>
                            {word}
                            {index < wordsArray.length - 1 && ' / '}
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="items marquee">
                    {wordsArray.map((word, index) => (
                        <div key={index} className={`item ${index % 2 === 0 ? 'black' : 'green'}`}>
                            {word}
                            {index < wordsArray.length - 1 && ' / '}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Runline;
