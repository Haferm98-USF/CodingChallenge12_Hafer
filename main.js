// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');
const colorInput = document.getElementById('color');

let isDrawing = false;
let startX, startY;
let currentShaape = 'line';
let selectedColor = '#000000';

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing() 
{
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
};

function stopDrawing()
{
    isDrawing = false;
}



const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {selectedColor = e.target.value});

const clearButton = document.getElementById('clearCanvas');
clearButton.addEventListener('click', () => {ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)});