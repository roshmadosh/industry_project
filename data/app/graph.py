import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import seaborn as sns

def bell_curve_salary_to_rent_plot(salary_to_rent_ratio):    #define mean and standard deviation
    mean = 40
    sd = 10    #define lower and upper bounds for x-axis
    lower_bound = 0
    upper_bound = 80    #create range of x-values from lower to upper bound in increments of .001
    x = np.arange(lower_bound,upper_bound, 0.001)    #create range of y-values that correspond to normal pdf with mean1=0 and sd=1
    y = norm.pdf(x,40,10)    # build the plot
    fig, ax = plt.subplots(figsize=(9,6))
    ax.plot(x,y,color='black')    #specify the region of the bell curve to fill in
    x_fill = np.arange(0, salary_to_rent_ratio, 0.001)
    y_fill = norm.pdf(x_fill,40,10)
    ax.fill_between(x_fill,y_fill,0, alpha=0.3, color='blue')
    plt.ylim([0,.042])
    #define title for the plot
    ax.set_title(f'{int(round(norm.cdf(salary_to_rent_ratio,40,10),2)*100)}th Percentile of Salary to Rent')
    plt.xlabel('Salary - Monthly Rent Ratio')
    #choose plot style and display the bell curve
    plt.style.use('default')
    ax.get_yaxis().set_visible(False)
    #plt.axvline(salary_to_rent_ratio,ymax=norm.pdf(salary_to_rent_ratio,40,10),color='black')
    plt.axvline(salary_to_rent_ratio,ymin=0,ymax=norm.pdf(salary_to_rent_ratio,40,10)/.0425,color='black')   
    plt.savefig('testplot.png')



def rent_histogram(rent,location):    #metrics for random data
    mean=2000
    std=800    #creating random data
    rent_data=np.random.normal(mean,std,1000)+ np.random.randint(-200,500)
    rent_data=np.where(rent_data<0,rent_data+1000,rent_data)    #plot histogram
    histogram_plot=sns.histplot(rent_data,bins=30)
    plt.xlabel(f'Rent Prices Locally ($)')
    plt.ylabel('Quantity of Renters')
    plt.title(f'Local Rent Prices {location}')    
    patch_number=0
    np_bins=np.histogram(rent_data,bins=30)[1].tolist()
    for j in range(len(np_bins)):
        if rent>(np_bins[j]):
            patch_number=j    
    histogram_plot.patches[patch_number].set_facecolor('salmon')
    plt.savefig('histo.png')
    

