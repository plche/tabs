import styled from "styled-components";
import {useState} from "react";

const TabLabel = styled.a`
        display: inline-block;
        padding: 0.5rem 0;
        margin: 1rem 0.2rem;
        width: 10rem;
        text-align: center;
        text-decoration: none;
        border: 1px solid silver;
        background-color: ${props => props.active ? "black" : "white"};
        color: ${props => props.active ? "white" : "black"};
    `;
const MainDiv = styled.div`
        margin-left: 1rem;
    `;
const ContentDiv = styled.div`
        width: 30rem;
        height: 15rem;
        padding: 0.5rem;
        margin-left: 0.2rem;
        border: 1px solid silver;
    `;

const Tabs = (props) => {
    const {tabs} = props;
    const [tabContent, setTabContent] = useState("");
    const [tabState, setTabState] = useState(new Array(tabs.length).fill(false));
    const onClickHandler = (e, index, content) => {
        setTabContent(content);
        // Will set active (=true) only tab been clicked, updating state and thus rendering again TabLabel component:
        setTabState(tabState => tabState.map((item, idx) => idx === index ? true : false));
    }

    return(
        <MainDiv>
            {tabs.map((tab, index) => <TabLabel key={'tab_' + index}
                                                active={tabState[index]}
                                                onClick={e => onClickHandler(e, index, tab.content)}
                                                href="#">{tab.label}</TabLabel>)}
            <ContentDiv>{tabContent}</ContentDiv>
        </MainDiv>
    );
}

export default Tabs;