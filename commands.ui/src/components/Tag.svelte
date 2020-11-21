<script>
  import { state } from '../store';
  let activeTag = state.tag;



  export let tag;
</script>

<style>
.tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  cursor: pointer;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px 0 12px;
  position: relative;
  margin: 0 20px 10px 0;
  transition: color 0.2s;
}

.tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  left: 100%;
  top: 0;
}
</style>

<small class="tag" on:click="{() => activeTag.set(tag)}">{tag}</small>