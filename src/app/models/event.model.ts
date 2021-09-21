export class Event {
  constructor(
    public title: string,
    public organization: string,
    public time: string,
    public highlights: string[],
    public links: { title: string; link: string }[],
    public imagePath: string
  ) {}
}
