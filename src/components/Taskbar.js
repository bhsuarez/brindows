import React, { useContext } from 'react'
import DataContext from '../contexts/dataContext'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`


function Taskbar() {
    const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
    console.log(projectRepo, react95Repo)
    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="shell32_1">
                        <Link href={react95Repo} target="_blank">React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="shell32_2">
                        <Link href={projectRepo} target="_blank">This Repo</Link>
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar
