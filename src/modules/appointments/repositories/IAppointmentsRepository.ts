import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppoitmentsDTO from '../dtos/ICreateAppointmentsDTO';

export default interface iAppointmentsRepository {
  create(data: ICreateAppoitmentsDTO): Promise<Appointment>;
  // findByID(id: string): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
