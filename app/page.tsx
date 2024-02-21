import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import * as m from '@/paraglide/messages';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const users : User[]= [];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>{m.users()}</Title>
      <Text>{m.a_list_of_users_from_database()}</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
