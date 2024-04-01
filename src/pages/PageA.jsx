import React, { useState, useMemo } from "react";

export const PageA = () => {
    const [conditionalStyle, setConditionalStyle] = useState(null);

    const loadStyles = async () => {
        const styleLoader = await import("../styles/conditionalstyles.scss");
        setConditionalStyle(() => styleLoader.default);
    };

    useMemo(() => loadStyles(), []);

    return (
        <>
			{conditionalStyle?<conditionalStyle/>:<></>}
            <div>This is PageA</div>
        </>
    );
};
