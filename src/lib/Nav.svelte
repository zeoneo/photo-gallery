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
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="primary" dark expand="md" style="background-color: #e3f2fd;">
  <NavbarBrand href="/">My Photo Gallery</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink class="active" href="/">Wedding</NavLink>
      </NavItem>
      <Dropdown nav isOpen={isDropdownOpen} toggle={() => (isDropdownOpen = !isDropdownOpen)}>
        <DropdownToggle nav caret>Photo Albums</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Albums</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem href="/project/my-first-project/">First Album</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/post">Blog Posts</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="/post">Blog Posts</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/pricing">Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">About Me</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
