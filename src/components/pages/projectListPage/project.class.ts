export class Project{
    constructor(
        private ID: string,
        private title: string,
        private description: string,
        private feedbackID: string ) { }
}

export class ProjectsList{
    private projectsList: Project[] = []
    addNewProject(project: Project) {
        this.projectsList.push(project)
    }
}