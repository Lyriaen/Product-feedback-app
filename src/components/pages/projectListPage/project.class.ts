export class Project{
    constructor(
        private ID: string,
        private title: string,
        private description: string,
        private feedbackID: string ) { }
    get getProject(){
        return {
            ID: this.ID,
            title: this.title,
            description: this.description,
            feedbackID: this.feedbackID,
        }
    }
}

export class ProjectsList{
    private projectsList: Project[] = []
    addNewProject(project: Project) {
        this.projectsList.push(project)
    }
    public get getProjectsList(){
        return this.projectsList
    }
}