using System.Collections.Generic;

namespace api.Data
{
    public interface IContext
    {
        List<Task> GetTasks();
        void AddTask(Task task);
        void DeleteTask(int id);
    }

    public class Context : IContext
    {
        private List<Task> Tasks { get; }

        public Context()
        {
            Tasks = new List<Task>();
        }

        public List<Task> GetTasks()
        {
           return Tasks;
        }

        public void AddTask(Task task)
        {
            Tasks.Add(task);
        }

        public void DeleteTask(int id)
        {
            Tasks.RemoveAll(t => t.Id == id);
        }
    }
}
