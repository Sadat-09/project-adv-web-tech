import { AllUser } from './src/all-user/entities/all-user.entity';
import { Admin } from './src/admin/entities/admin.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Room } from 'src/admin/entities/admin.entity';
import { Booking } from 'src/booking/entities/booking.entity';
import { faq } from 'src/faq/entities/faq.entity';
import { review } from 'src/review/entities/review.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  entities: [AllUser,Admin,Room,Booking,faq,review],
  synchronize: true,
};

export default config;
