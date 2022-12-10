import styled from "styled-components";
import React, { useState } from "react";

function ListJSX({item}: {item: React.ReactNode}, {i}: {i: React.ReactNode}) {
    return(
        <div className="item">⚪️ {item}</div>
    );
}

export default function ToDoList() {
    type Props = {
        list: Array<String>;
    };

    const ListJSX2 = (props: Props) => {
        const list = props.list;
        return(
            <>{list.map((item, key) => <div className="item"><div className="text">⚪️ {item}</div> <div className="trashbin" onClick={() => {DeleteItem(key)}}>🗑</div><br /></div>)}</>
        );
    }

    const [toDo, setToDo] = useState('');
    const [list, setList] = useState(['What you need to do']);
    const [refresh, setRefresh] = useState(true);

    function handleForm(e: any) {
        e.preventDefault();

        setList([...list, toDo]);

    }

    function DeleteItem(i: number) {
        list.splice(i, 1);
        setRefresh(!refresh);
    }

    return (
        <Page>
            <ToDoBox>
                <h1>To Do List</h1>
                <Form onSubmit={handleForm}>
                    <input type="text" id="todo" placeholder="What you need to do?" value={toDo} onChange={(e) => { setToDo(e.target.value) }} required></input><br />
                    <Button>New Entry</Button>
                </Form>

            <Line></Line>

            <List>
                {/* {list.map((item, key) => <ListJSX key={key} item={item} i={i} />)} */}
                <ListJSX2 list={list} />
            </List>
            </ToDoBox>
        </Page>
    );
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #E5E5E5;
`;

const ToDoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    padding: 12px;

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 160%;
    }

    input {
        margin-right: 12px;
        width: 366px;
        height: 30px;
        background: #F9FAFB;
        border: 1px solid #D0D5DD;
        border-radius: 16px;
        padding-left: 12px;
    }
`;

const Form = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;
    background: #1D2939;
    border-radius: 30px;
    color: #E4E7EC;
`;

const Line = styled.div`
    background-color: #E5E5E5;
    height: 5px;
    width: 150%;
    margin: 12px 0px 12px 0px;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 18px;

    .item {
        display: flex;
        margin: 6px 0px 6px 0px;
        padding: 0px;
        justify-content: space-between;
        width: 100%;
    }

    .trashbin {
        //justify-content: flex-end;
        cursor: pointer;
    }
`;
