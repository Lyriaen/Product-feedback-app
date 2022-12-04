import { FrontendMentorLogo } from "./components/FrontendMentorLogo";
import { TagSelectPanel } from "./components/TagSelectPanel";
import { RoadmapPanel } from "./components/RoadmapPanel";
import { StyledAsideNavigation } from "./AsideNavigation.styled";

export const AsideNavigation = () => {
    return (
        <StyledAsideNavigation>
            <FrontendMentorLogo/>
            <TagSelectPanel/>
            <RoadmapPanel/>
        </StyledAsideNavigation>
    )
}