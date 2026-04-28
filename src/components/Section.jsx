import React from 'react';

const Section = ({ content }) => {
    return (
        <div
            className="section-wrapper"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default Section;
