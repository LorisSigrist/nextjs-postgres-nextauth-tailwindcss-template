'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import * as m from '@/paraglide/messages';

export default function Example() {
  const data = [
    {
      [m.axis_label_month()]: 'Jan 21',
      [m.m_value_sales()]: 2890,
      [m.value_profit()]: 2400
    },
    {
      [m.axis_label_month()]: 'Feb 21',
      [m.m_value_sales()]: 1890,
      [m.value_profit()]: 1398
    },
    {
      [m.axis_label_month()]: 'Jan 22',
      [m.m_value_sales()]: 3890,
      [m.value_profit()]: 2980
    }
  ];

  return (
    <Card className="mt-8">
      <Title>{m.heading_performance()}</Title>
      <Text>{m.comparisons_between_sales_and_profit()}</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={[m.m_value_sales(), m.value_profit()]}
        index={m.axis_label_month()}
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
