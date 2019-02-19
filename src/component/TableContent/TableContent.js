import React from 'react'
import { Table } from 'semantic-ui-react';
import './TableContent.css'

class TableContent extends React.Component{


    render(){
        return(
            <Table color='black' inverted className="table-class">
    

            <Table.Body>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell>                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
              <Table.Row>
                <Table.Cell onClick={()=>alert("this got clicked")}>Item1</Table.Cell> 
                
              </Table.Row>
            </Table.Body>
          </Table>

        );
    }
} 

export default TableContent
