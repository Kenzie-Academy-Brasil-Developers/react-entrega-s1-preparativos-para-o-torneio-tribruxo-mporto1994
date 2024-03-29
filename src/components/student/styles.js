import styled from "styled-components";

export const Students = styled.div`
    display:flex;
    flex-direction: row;
    width: 800px;
    height: 600px;
    justify-content: space-between;
    align-items: center;
    img {
        width: 200px;
        height: 300px;
        object-fit: cover ;
        }
    
`
export const StudentSorted1 = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    color: black;
    justify-content: center;
    align-items: center;
    color:#FFF;
    border:4px solid  ${(props)=>`rgb(${props.house})`};
    border-radius:5px;
    background-color: ${(props)=>`rgb(${props.house},0.5)`};
    

`
export const StudentSorted2 = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    justify-content: center;
    align-items: center;
    color:#FFF;
    border:4px solid  ${(props)=>`rgb(${props.house})`};
    border-radius:5px;
    background-color: ${(props)=>`rgb(${props.house},0.5)`};
`
export const StudentSorted3 = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    color: black;
    justify-content: center;
    align-items: center;
    border:4px solid  ${(props)=>`rgb(${props.house})`};
    border-radius:5px;
    background-color: ${(props)=>`rgb(${props.house},0.5)`};
    color:#FFF;
`
export const Page = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #202C59;
    button {
        width: 300px;
        height: 50px;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        font-weight: 450;
        background-color: #181825 ;
        border: none;
        border-radius:4px;
        font-size:18px;
        
    }
    button:hover{
            background-color: #383856;
            color:#AAA;
            font-weight: 600;
            cursor: pointer;
        }
`