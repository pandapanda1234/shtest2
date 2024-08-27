import React from "react";
import './training.css';

function Table(){
    return(
        <div className="Table">
            <table className="mainTable" align="center" border="1"  width="50%" >
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C<br/>D</td>
                    <td><font color="#e60033">E</font></td>
                    <td><font color="#0095d9">F</font></td>
                </tr>

                <tr>
                    <td><font color="#e60033">G</font><br/>
                        <font color="#0095d9">H</font>
                    </td>
                    <td>IJ<br/>
                        KL
                    </td>
                    <td rowSpan={2}>M</td>
                    <td colSpan={2}>N</td>
                </tr>
                
                <tr>
                    <td><b>O</b></td>
                    <td><u>P</u></td>
                    <td colSpan={2}><u>Q</u> <b>R</b></td>
                </tr>



            </table>
        </div>
    

    );

};

export default Table;
