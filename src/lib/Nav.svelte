<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  let isOpen: boolean = false;
  let isDropdownOpen: boolean = false;
  function handleUpdate(event) {
    console.log('Update navbar collapse called', event);
    isOpen = event.detail.isOpen;
  }
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<Navbar fixed="top" color="primary" dark expand="md" style="background-color: #e3f2fd;">
  <NavbarBrand href="/">My Photo Gallery</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink class="active" href="/" on:click={toggle}>Wedding</NavLink>
      </NavItem>
      <Dropdown
        nav
        isOpen={isDropdownOpen}
        toggle={() => {
          isDropdownOpen = !isDropdownOpen;
          isOpen = isDropdownOpen;
        }}
      >
        <DropdownToggle nav caret>Photo Albums</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Albums</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem href="/project/my-first-project/" on:click={toggle}>First Album</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/post" on:click={toggle}>Blog Posts</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="/post" on:click={toggle}>Blog Posts</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/pricing" on:click={toggle}>Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about" on:click={toggle}>About Me</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
