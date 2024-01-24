import { List, Tag } from 'antd';
const data = [
    {
        title: 'CGSTRate',
        description: 'Applicable CGST Rate for FY 22-23',
        value: 0.18
    },
    {
        title: 'IncomeLimit',
        description: 'Income tax limit',
        value: 100000,
    },
    {
        title: 'SubsidyLimit',
        description: 'Subsidy limit defined by govt as on 23.Feb.2022',
        value: 50000
    },
    {
        title: 'InterestRate',
        description: 'RBI repo rate',
        value: 0.04
    },
];
const InputList = () => (
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    title={<Tag color='cyan'>{item.title} = {item.value}</Tag>}
                    description={item.description}
                />
            </List.Item>
        )}
    />
);
export default InputList;