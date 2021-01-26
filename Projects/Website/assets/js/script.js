fetch('assets/files/contents.json').then(response => response.json())
    .then(result => {
        result.data.forEach(item => {
            DisplayData(item);
        });
    })
    .catch(error => console.error(error));

function DisplayData(item) {
    var body = document.getElementById('course-body');
    var html =
        `
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div
            class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
            <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">${item.level}</span>
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">${item.course}</h2>
            <h3
                class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$${item.price}</span>
                <span class="text-lg ml-1 font-normal text-gray-500"></span>
            </h3>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>${item.duration}
            </p>
            

            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                shorts.</p>
        </div>
    </div>
    `;
    body.innerHTML += html;
}