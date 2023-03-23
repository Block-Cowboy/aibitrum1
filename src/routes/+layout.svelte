<script lang="ts">
    import Header from './Header.svelte'
	// import Footer from './Footer.svelte'
	import './styles.css'
</script>

<div class="app">

	<Header />

	<main>
		<slot />
	</main>

	<!-- <Footer /> -->

</div>





<style>

	.app {
        /* background: rgb(13, 13, 13); */
        font-family: Arial, Helvetica, sans-serif;
        display: grid;
        justify-items: center;
        align-items: center;
		padding: 0px;
		margin: 0px;
	}


</style>


