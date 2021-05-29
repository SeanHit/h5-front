import { Divider, Tag } from 'antd';
export const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        // render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: '生效时间',
        dataIndex: 'start_time',
        key: 'start_time',
    },
    {
        title: '截至时间',
        dataIndex: 'end_time',
        key: 'end_time',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: tags => (
    //         <span>
    //             {tags.map(tag => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </span>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <span>
    //             <a>Invite {record.name}</a>
    //             <Divider type="vertical" />
    //             <a>Delete</a>
    //         </span>
    //     ),
    // },
];