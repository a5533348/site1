document.addEventListener('DOMContentLoaded', function() {
    const animatedSections = document.querySelectorAll('.about, .core-services');
    const teamElements = document.querySelectorAll('.team-image, .team-info');
    
    // 创建一个 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-start');
                // 一旦添加了动画类，就不再需要观察了
                observer.unobserve(entry.target);
            }
        });
    }, {
        // 设置阈值，当元素出现 20% 时触发动画
        threshold: 0.2
    });

    // 开始观察所有需要动画的部分
    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // 观察团队部分的元素
    teamElements.forEach(element => {
        observer.observe(element);
    });
}); 