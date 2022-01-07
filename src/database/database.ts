import { SQLiteDatabaseAdapter } from '@deepkit/sqlite';
import { entity, t } from '@deepkit/type';
import { Database } from '@deepkit/orm';

async function main(){
    @entity.name('user')
    class User {
        @t.primary.autoIncrement
        public id : number = 0;

        @t
        created : Date = new Date();

        constructor(
            @t public name : string
        ){}
    }

    const database = new Database( new SQLiteDatabaseAdapter('./ejemplo.sqlite'), [User] );
    await database.migrate();
    await database.persist( new User('Usuario 1'));

    const allUsers = await database.query(User).find();
    console.log('Usuarios: ', allUsers)
}

main();