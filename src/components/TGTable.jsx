import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import TGLoader from './TGLoader';

const TGTable = (props) => {
    const { columns, dataSource, loading } = props;
    const [dataSourceList, setDataSourceList] = useState([]);

    useEffect(() => {
        setDataSourceList(dataSource)
    }, [dataSource])
    return (<>
        <Table columns={columns} dataSource={dataSourceList} loading={loading} />
    </>)

}
export default TGTable