import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownUtility = ({ path }) => {

    const [content, setContent] = useState("");

    const fetchPageContent = async () => {
        const res = await fetch(`https://timmywheels.github.io/${path}.md`)
        const data = await res.text();
        console.log('data:', data)
        // @ts-ignore
        setContent(data);
    }

    useEffect(() => {
        fetchPageContent().catch(err => err)
    }, []);

    return (
        <div>
            <ReactMarkdown>
                { content }
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownUtility;
