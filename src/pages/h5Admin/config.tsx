import { Divider, Tag } from 'antd';
import { handleEditor } from './tools'
export const columns = [
    {
        title: '编号id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '名称(标号)',
        dataIndex: 'tid',
        key: 'tid'
    },
    {
        title: '链接',
        dataIndex: 'url',
        key: 'url',
        render: (_, record) => (<a>{`http://127.0.0.1:8000/check?tid=${record.tid}`}</a>)
    },
    {
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
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
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <span>
                <Tag color={'geekblue'} onClick={() => handleEditor(record.tid)} >
                    编辑
                </Tag>

                <Divider type="vertical" />
                <Tag color={'red'} onClick={() => handleDelete(record.tid)} >
                    删除
                </Tag>
            </span >
        ),
    },
];