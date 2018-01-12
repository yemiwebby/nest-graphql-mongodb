export class CreateUserDto {
  public readonly bio?: string;
  public readonly createdAt: Date;
  public readonly email: string;
  public readonly firstName: string;
  public readonly id: string;
  public readonly lastName: string;
  public readonly password: string;
  public readonly profilePicture?: string;
  public readonly updatedAt: Date;
  public readonly username: string;
}
