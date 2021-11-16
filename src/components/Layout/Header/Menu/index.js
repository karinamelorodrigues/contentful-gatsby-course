import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuWrapper, MenuItem, SubMenuItemWrapper } from './style';


const Menu = () => {
    const result = useStaticQuery(graphql `
        fragment menuItemData on ContentfulMenuItem {
            id
            label
            page {
                ... on ContentfulPage{
                    slug
                }
                
                ... on ContentfulBlog{
                    slug
                }
                
            }
         }
        query MenuQuery {
            contentfulMenu {
                menuItems {
                    ...menuItemData
                    subMenuItems {
                        ...menuItemData
                    }
                }
            }
        }
    `);

    return (
        <MenuWrapper>
        {result.contentfulMenu.menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id}>
                {!menuItem.subMenuItems ? (
                    <Link to={`/${menuItem.page.slug}`}>{menuItem.label}</Link> 
                ) : ( 
                    <SubMenuItemWrapper>
                        <div>{menuItem.label}</div>
                        <div>
                            {menuItem.subMenuItems?.map((subMenuItem) => (
                                <div key={subMenuItem.id}>
                                    <Link to={`/${subMenuItem.page.slug}`}>
                                        {subMenuItem.label}
                                    </Link>
                                    
                                </div>
                            ))}
                        </div> 
                    </SubMenuItemWrapper>
                    )}
            </MenuItem>
        ))}
      </MenuWrapper>
    );
}

export default Menu;