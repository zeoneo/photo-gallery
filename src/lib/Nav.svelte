<script lang="ts">
	import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';

	let isOpen: boolean = false;
	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar color="primary" dark expand="md">
	<NavbarBrand href="/">My Photo Gallery</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink class="active" href="/">Photo Albums</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/blogs">Blogs</NavLink>
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
