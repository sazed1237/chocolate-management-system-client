import React from 'react';

const ChocolateTable = ({chocolate}) => {

    const  { name, country, category } = chocolate


    return (
        <div>
            {/* <div className="overflow-x-auto">
                
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{name}</td>
                            <td>{country}</td>
                            <td>{category}</td>
                            <td></td>
                        </tr>
                    </tbody>

            </div> */}
        </div>
    );
};

export default ChocolateTable;