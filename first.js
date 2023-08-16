<script>
// Если контекста нет, то передают null
const numbers = [1, 10, 33, 9, 15];
const max = Math.max.apply(null, numbers); // 33

const numbers = [1, 10, 33, 9, 15];
const max = Math.max.call(null, ...numbers); // 33

</script>
