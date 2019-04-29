export class Project{
    projectId: number;
    project :string;
    startDate : string;
    endDate : string;
    priority : number;
    manager : string;
    constructor(){
        this.projectId=0;
        this.project='';
        this.startDate='';
        this.endDate='';
        this.priority=0;
        this.manager='';    
    }
}
