
import React from 'react';
import Navber from './Component5/Navber';
import Table from './Component5/Table';
import TablePG from './Component5/TablePG.js';
import RouterNav from './Routing/Page/RouterNav';


const Main5 = () => {
    return (
        <div className='container mx-auto p-3'>
            <div>

                <Navber></Navber>
                <RouterNav></RouterNav>
                {/* <Table></Table> */}
                <TablePG></TablePG>
            </div>


        </div>
    );
};

export default Main5;