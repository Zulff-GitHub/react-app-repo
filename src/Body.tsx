import React from 'react';
import { useForm } from 'react-hook-form';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Countword } from './Countword';

interface wordObj {
    word: string;
    occurance: number;
}

export default function Body() {

    const {register, handleSubmit, errors} = useForm()

    const onSubmit = handleSubmit((data) => {
        let resultList: wordObj[] = Countword({inText : data.fullText});
        buildTable(resultList);
    })
    return (
        <main>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="fullText">Enter Text Here</label>
                <textarea ref={register({ required: true })} id="fullText" name="fullText" rows={4} cols={30}
                    className='form-control' 
                    placeholder='Enter some texts here'/> 
                {errors.fullText && <p className='error-msg'>Text box is empty</p>}      
            </div><br />
            <Button type="submit">Submit</Button><br />
            <br />
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Word</th>
                        <th>Occurance</th>
                    </tr>
                    </thead>

                    <tbody id="tableResult">
                        
                    </tbody>
                </Table>
            </div>
        </form>
        </main>
      );
}

function buildTable(wordList : wordObj[]){
    const table = document.getElementById('tableResult');
    
    //Reset table list
    if(table) table.innerHTML = "";

    for (var i = 0; i < wordList.length; i++){
        var row = `<tr>
                        <td>${wordList[i].word}</td>
                        <td>${wordList[i].occurance}</td>
                  </tr>`;
        if(table)          
            table.innerHTML += row
    }
}
