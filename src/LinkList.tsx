// in src/components/LinkList/LinkList.jsx

import "./LinkList.css";

const LinkList = (props: { options: any[]; }) => {
    const linkMarkup = props.options.map((link) => (
        <li key={link.id} className="link-list-item">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                {link.text}
            </a>
        </li>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;