<script>
    import { onMount } from 'svelte'
    let text = ''

    async function loop(){
        if(text.length === 3) text = ''
        text += '●'
        await new Promise(resolve => setTimeout(resolve, 300))
        loop()
    }

    onMount(()=>{
        loop()
    })
	
</script>

<style>

	.LoadingIndicator {
        align-items: center;
        color: #333;
        display: flex;
        font-size: .75em;
        letter-spacing: 1em;
        justify-content: center;
        text-align: center;
        z-index: 20;
    }
    
</style>

<div class="LoadingIndicator">
    {text}
</div>